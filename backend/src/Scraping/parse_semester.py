import re
from bs4 import BeautifulSoup

def parse_courses(html):
    """
    Given the Banner final schedule HTML (for 1 or more subjects),
    return a list of dicts, each representing a course with fields like:
       {
         "course_title": ...,
         "crn": ...,
         "associated_term": ...,
         "credits": ...,
         "time": ...,
         "days": ...,
         "where": ...,
         "schedule_type": ...,
         "instructor": ...
       }
    """
    soup = BeautifulSoup(html, "html.parser")
    course_rows = soup.find_all("th", class_="ddtitle")

    courses = []
    for th in course_rows:
        title_line = th.get_text(strip=True)
        # e.g. "Financial Accounting - 10004 - ACCT 210 - 1"
        parts = title_line.split(" - ")
        if len(parts) >= 4:
            course_title_str = f"{parts[0]} - {parts[2]} - {parts[3]}"
            crn = parts[1]
        else:
            course_title_str = title_line
            crn = None

        # The row after this <th> has the associated term, credits, etc.
        detail_tr = th.find_parent("tr").find_next_sibling("tr")
        if not detail_tr:
            continue

        detail_text = detail_tr.get_text(" ", strip=True)

        # Extract Associated Term
        term_match = re.search(r"Associated Term:\s*(.*?)\s+Registration Dates:", detail_text)
        associated_term = term_match.group(1) if term_match else ""

        # Extract Credits (e.g. "3.000 Credits")
        credits_match = re.search(r"(\d+\.\d+\s+Credits)", detail_text)
        credits = credits_match.group(1) if credits_match else ""

        # Find the schedule sub-table
        sched_table = detail_tr.find("table", class_="datadisplaytable")
        if not sched_table:
            # No schedule table => maybe TBA or no meeting info
            courses.append({
                "course_title": course_title_str,
                "crn": crn,
                "associated_term": associated_term,
                "credits": credits,
                "time": "",
                "days": "",
                "where": "",
                "schedule_type": "",
                "instructor": "",
            })
            continue

        rows = sched_table.find_all("tr")
        if len(rows) < 2:
            # No actual data row
            courses.append({
                "course_title": course_title_str,
                "crn": crn,
                "associated_term": associated_term,
                "credits": credits,
                "time": "",
                "days": "",
                "where": "",
                "schedule_type": "",
                "instructor": "",
            })
            continue

        # The second row typically has the first set of meeting info
        data_cells = rows[1].find_all("td")
        time_str = data_cells[1].get_text(strip=True) if len(data_cells) > 1 else ""
        days_str = data_cells[2].get_text(strip=True) if len(data_cells) > 2 else ""
        where_str = data_cells[3].get_text(strip=True) if len(data_cells) > 3 else ""
        schedule_type_str = data_cells[5].get_text(strip=True) if len(data_cells) > 5 else ""
        instructor_str = data_cells[6].get_text(strip=True) if len(data_cells) > 6 else ""

        # Clean up instructor text
        instructor_str = instructor_str.replace("(P)", "").strip()
        instructor_str = re.sub(r"\s{2,}", " ", instructor_str)

        course_data = {
            "course_title": course_title_str,
            "crn": crn,
            "associated_term": associated_term,
            "credits": credits,
            "time": time_str,
            "days": days_str,
            "where": where_str,
            "schedule_type": schedule_type_str,
            "instructor": instructor_str,
        }
        courses.append(course_data)

    return courses
