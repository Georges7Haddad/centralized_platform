
import requests
import csv
from bs4 import BeautifulSoup
import re
from parse_semester import parse_courses  

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0"})

url_dynamic_sched = "https://www-banner.aub.edu.lb/pls/weba/bwckschd.p_disp_dyn_sched"
r0 = session.get(url_dynamic_sched)
soup0 = BeautifulSoup(r0.text, "html.parser")

term_select = soup0.find("select", {"name": "p_term"})
option_tags = term_select.find_all("option")

all_terms = []
for opt in option_tags:
    val = opt.get("value")             # e.g. "202510"
    label = opt.get_text(strip=True)   # e.g. "Fall 2024-2025 (View only)"
    if val and val.strip():
        if label.startswith("Fall") or label.startswith("Spring"):
            all_terms.append((val, label))

for term_code, term_label in all_terms:
    print(f"Processing term {term_code}: {term_label}")

    # 1) POST to select the term
    url_select_term = "https://www-banner.aub.edu.lb/pls/weba/bwckgens.p_proc_term_date"
    payload_term = {
        "p_calling_proc": "bwckschd.p_disp_dyn_sched",
        "p_term": term_code
    }
    r_term = session.post(url_select_term, data=payload_term)

    # 2) Scrape subject codes
    soup_term = BeautifulSoup(r_term.text, "html.parser")
    subj_select = soup_term.find("select", {"name": "sel_subj"})
    if not subj_select:
        print(f"No subject dropdown for {term_code}, skipping.")
        continue
    subject_codes = []
    for opt in subj_select.find_all("option"):
        subj_val = opt.get("value")
        if subj_val and subj_val not in ["dummy", "%", ""]:
            subject_codes.append(subj_val)

    # 3) For each subject, fetch courses
    url_crse = "https://www-banner.aub.edu.lb/pls/weba/bwckschd.p_get_crse_unsec"
    courses_for_this_term = []

    for subj in subject_codes:
        payload_search = [
            ("term_in", term_code),
            ("sel_subj", "dummy"),
            ("sel_subj", subj),
            ("sel_day", "dummy"),
            ("sel_schd", "dummy"),
            ("sel_insm", "dummy"),
            ("sel_camp", "dummy"),
            ("sel_levl", "dummy"),
            ("sel_sess", "dummy"),
            ("sel_instr", "dummy"),
            ("sel_ptrm", "dummy"),
            ("sel_attr", "dummy"),
            ("sel_crse", ""),
            ("sel_title", ""),
            ("sel_schd", "%"),
            ("sel_from_cred", ""),
            ("sel_to_cred", ""),
            ("sel_ptrm", "%"),
            ("sel_instr", "%"),
            ("begin_hh", "0"),
            ("begin_mi", "0"),
            ("begin_ap", "a"),
            ("end_hh", "0"),
            ("end_mi", "0"),
            ("end_ap", "a"),
        ]
        r_subj = session.post(url_crse, data=payload_search)
        courses_parsed = parse_courses(r_subj.text)
        for c in courses_parsed:
            # add term info
            c["term_code"] = term_code
            c["term_label"] = term_label
        courses_for_this_term.extend(courses_parsed)

    print(f"  Found {len(courses_for_this_term)} courses for {term_label}")

    # 4) Write to CSV
    safe_label = re.sub(r"[^\w\-]+", "_", term_label)  # replace weird chars with underscore
    csv_filename = f"{safe_label}.csv"

    if courses_for_this_term:
        fieldnames = list(courses_for_this_term[0].keys())
        # e.g. 
        # fieldnames = ["course_title","crn","associated_term","credits","time","days","where","schedule_type","instructor","term_code","term_label"]

        with open(csv_filename, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            for row in courses_for_this_term:
                writer.writerow(row)

    else:
        print("  No courses to save.")

print("All terms processed!")
