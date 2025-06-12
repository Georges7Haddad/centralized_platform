export const courseData = {
  courseId: "CMPS202",
  courseCode: "CMPS 202",
  courseTitle: "Data Structures",
  credits: 3,
  term: "Spring 2025",
  instructor: {
    name: "Dr. John Doe",
    email: "jd42@aub.edu.lb",
    office: "Bliss Hall 502",
    officeHours: "Monday & Wednesday 2:00 PM - 3:30 PM"
  },
  chatGroups: [
    {
      id: 1,
      name: "CMPS 202 General",
      description: "General discussion for CMPS 202 Data Structures",
      created_at: "2025-05-15T10:00:00",
      creator_id: 101, // Instructor ID
      members_count: 28,
      is_official: true,
      messages: [
        {
          message_id: "msg1",
          sender: {
            id: 101,
            name: "Dr. John Doe",
            role: "instructor",
            avatar: null
          },
          content: "Welcome to the CMPS 202 discussion group! Please use this space to ask questions and discuss course material.",
          timestamp: "2025-05-15T10:05:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg2",
          sender: {
            id: 202,
            name: "Mariam Elwirish",
            role: "student",
            avatar: null
          },
          content: "Thank you Dr. Doe. I have a question about the first assignment. Is it due next week?",
          timestamp: "2025-05-15T14:23:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg3",
          sender: {
            id: 101,
            name: "Dr. John Doe",
            role: "instructor",
            avatar: null
          },
          content: "Yes, Assignment 1 is due next Thursday at 11:59 PM. Please make sure to submit it through the assignments tab.",
          timestamp: "2025-05-15T15:10:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg4",
          sender: {
            id: 203,
            name: "Ahmad Khalil",
            role: "student",
            avatar: null
          },
          content: "Will we be discussing linked lists in tomorrow's lecture?",
          timestamp: "2025-06-09T09:45:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg5",
          sender: {
            id: 101,
            name: "Dr. John Doe",
            role: "instructor",
            avatar: null
          },
          content: "Yes, we'll be covering linked lists implementation and operations. Please review the reading material before class.",
          timestamp: "2025-06-09T10:15:00",
          read: false,
          deleted: false
        }
      ]
    },
    {
      id: 2,
      name: "Assignment 2 Study Group",
      description: "Group for discussing Assignment 2 problems",
      created_at: "2025-06-01T15:30:00",
      creator_id: 202, // Student ID (Mariam)
      members_count: 8,
      is_official: false,
      messages: [
        {
          message_id: "msg6",
          sender: {
            id: 202,
            name: "Mariam Elwirish",
            role: "student",
            avatar: null
          },
          content: "Hey everyone, I created this group so we can discuss Assignment 2. Is anyone having trouble with the stack implementation?",
          timestamp: "2025-06-01T15:32:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg7",
          sender: {
            id: 204,
            name: "Sara Hassan",
            role: "student",
            avatar: null
          },
          content: "I'm struggling with the queue simulation part. Can we meet at the library tomorrow at 3 PM?",
          timestamp: "2025-06-01T15:45:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg8",
          sender: {
            id: 202,
            name: "Mariam Elwirish",
            role: "student",
            avatar: null
          },
          content: "That works for me. I'll book a study room.",
          timestamp: "2025-06-01T15:50:00",
          read: true,
          deleted: false
        }
      ]
    },
    {
      id: 3,
      name: "Midterm Prep",
      description: "Group for midterm exam preparation",
      created_at: "2025-06-05T18:20:00",
      creator_id: 203, // Student ID (Ahmad)
      members_count: 15,
      is_official: false,
      messages: [
        {
          message_id: "msg9",
          sender: {
            id: 203,
            name: "Ahmad Khalil",
            role: "student",
            avatar: null
          },
          content: "I created this group for midterm preparation. Let's share practice problems and study tips.",
          timestamp: "2025-06-05T18:22:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg10",
          sender: {
            id: 205,
            name: "Omar Farid",
            role: "student",
            avatar: null
          },
          content: "Great idea! I found some practice problems from previous years. I'll share them here.",
          timestamp: "2025-06-05T19:05:00",
          read: true,
          deleted: false
        },
        {
          message_id: "msg11",
          sender: {
            id: 202,
            name: "Mariam Elwirish",
            role: "student",
            avatar: null
          },
          content: "I'm creating a study guide that summarizes all the key concepts. Will share it by tomorrow.",
          timestamp: "2025-06-09T08:30:00",
          read: false,
          deleted: false
        }
      ]
    }
  ],
  schedule: {
    days: "MW",
    time: "10:00 AM - 11:15 AM",
    location: "Bliss Hall 205"
  },
  description: "This course covers the fundamental data structures used in computer science. Topics include arrays, linked lists, stacks, queues, trees, hash tables, graphs, and their applications. The course also covers algorithm analysis, sorting and searching techniques, and introduces concepts of algorithm design.",
  objectives: [
    "Understand the concepts and implementation of basic data structures",
    "Analyze the time and space complexity of algorithms",
    "Apply appropriate data structures to solve computational problems",
    "Implement and use data structures in programming assignments",
    "Develop problem-solving skills through algorithmic thinking"
  ],
  gradingPolicy: {
    assignments: "30%",
    midterm: "25%",
    project: "15%",
    final: "30%"
  },
  announcements: [
    {
      id: 1,
      title: "Midterm Exam Date Confirmed",
      content: "The midterm exam will be held on June 15th from 10:00 AM to 12:00 PM in Bliss Hall 205. The exam will cover all material up to and including Week 6 (Binary Trees).",
      date: "2025-06-01",
      important: true
    },
    {
      id: 2,
      title: "Assignment 2 Deadline Extended",
      content: "Due to the upcoming university event, the deadline for Assignment 2 has been extended to June 12th at 11:59 PM.",
      date: "2025-05-28",
      important: false
    },
    {
      id: 3,
      title: "Welcome to Data Structures",
      content: "Welcome to CMPS 202! Please review the syllabus and make sure to join our course discussion forum. Office hours will begin next week.",
      date: "2025-05-15",
      important: false
    }
  ],
  modules: [
    {
      id: 1,
      title: "Introduction to Data Structures",
      weeks: "1",
      content: [
        {
          id: "lecture1",
          type: "lecture",
          title: "Course Introduction & Algorithm Analysis",
          description: "Overview of the course, review of basic programming concepts, and introduction to algorithm analysis.",
          files: [
            {
              name: "Lecture1_Slides.pdf",
              size: "2.4 MB",
              uploadDate: "2025-05-15"
            },
            {
              name: "AlgorithmAnalysis_Notes.pdf",
              size: "1.1 MB",
              uploadDate: "2025-05-15"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture1"
        },
        {
          id: "reading1",
          type: "reading",
          title: "Required Reading: Chapter 1",
          description: "Read Chapter 1 of the textbook: Introduction to Algorithm Analysis",
          dueDate: null
        }
      ]
    },
    {
      id: 2,
      title: "Arrays and Linked Lists",
      weeks: "2-3",
      content: [
        {
          id: "lecture2",
          type: "lecture",
          title: "Arrays and Their Applications",
          description: "Deep dive into array data structures, operations, and time complexity.",
          files: [
            {
              name: "Lecture2_Arrays.pdf",
              size: "3.2 MB",
              uploadDate: "2025-05-20"
            },
            {
              name: "ArrayExamples.java",
              size: "4.5 KB",
              uploadDate: "2025-05-20"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture2"
        },
        {
          id: "lecture3",
          type: "lecture",
          title: "Linked Lists",
          description: "Introduction to linked lists, types of linked lists, and operations.",
          files: [
            {
              name: "Lecture3_LinkedLists.pdf",
              size: "2.8 MB",
              uploadDate: "2025-05-22"
            },
            {
              name: "LinkedListImplementation.java",
              size: "6.2 KB",
              uploadDate: "2025-05-22"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture3"
        },
        {
          id: "assignment1",
          type: "assignment",
          title: "Assignment 1: Array and Linked List Implementation",
          description: "Implement various operations on arrays and linked lists. Compare their performance.",
          dueDate: "2025-05-29T23:59:00",
          maxPoints: 100,
          files: [
            {
              name: "Assignment1_Instructions.pdf",
              size: "420 KB",
              uploadDate: "2025-05-22"
            },
            {
              name: "Assignment1_Template.java",
              size: "3.1 KB",
              uploadDate: "2025-05-22"
            }
          ],
          submitted: true,
          submissionDate: "2025-05-28T14:23:00",
          grade: 95,
          feedback: "Excellent work on the linked list implementation. Your time complexity analysis was thorough and accurate."
        }
      ]
    },
    {
      id: 3,
      title: "Stacks and Queues",
      weeks: "4",
      content: [
        {
          id: "lecture4",
          type: "lecture",
          title: "Stacks: Concepts and Applications",
          description: "Understanding stack data structure, operations, and applications like expression evaluation.",
          files: [
            {
              name: "Lecture4_Stacks.pdf",
              size: "2.5 MB",
              uploadDate: "2025-05-27"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture4"
        },
        {
          id: "lecture5",
          type: "lecture",
          title: "Queues and Their Applications",
          description: "Queue data structure, operations, and real-world applications.",
          files: [
            {
              name: "Lecture5_Queues.pdf",
              size: "2.3 MB",
              uploadDate: "2025-05-29"
            },
            {
              name: "QueueImplementation.java",
              size: "5.8 KB",
              uploadDate: "2025-05-29"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture5"
        },
        {
          id: "assignment2",
          type: "assignment",
          title: "Assignment 2: Stack and Queue Applications",
          description: "Implement a calculator using stacks and a simulation using queues.",
          dueDate: "2025-06-12T23:59:00",
          maxPoints: 100,
          files: [
            {
              name: "Assignment2_Instructions.pdf",
              size: "480 KB",
              uploadDate: "2025-05-30"
            }
          ],
          submitted: false,
          submissionDate: null,
          grade: null,
          feedback: null
        }
      ]
    },
    {
      id: 4,
      title: "Trees",
      weeks: "5-6",
      content: [
        {
          id: "lecture6",
          type: "lecture",
          title: "Introduction to Trees",
          description: "Tree terminology, binary trees, and tree traversal algorithms.",
          files: [
            {
              name: "Lecture6_Trees.pdf",
              size: "3.5 MB",
              uploadDate: "2025-06-03"
            },
            {
              name: "TreeTraversal.java",
              size: "7.2 KB",
              uploadDate: "2025-06-03"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture6"
        },
        {
          id: "lecture7",
          type: "lecture",
          title: "Binary Search Trees",
          description: "Binary search tree properties, operations, and analysis.",
          files: [
            {
              name: "Lecture7_BST.pdf",
              size: "2.9 MB",
              uploadDate: "2025-06-05"
            }
          ],
          videoUrl: "https://aub.edu.lb/courses/cmps270/videos/lecture7"
        },
        {
          id: "quiz1",
          type: "quiz",
          title: "Quiz 1: Trees",
          description: "Online quiz covering tree concepts and binary search trees.",
          dueDate: "2025-06-10T23:59:00",
          maxPoints: 20,
          timeLimit: "30 minutes",
          attempts: "1",
          submitted: false,
          grade: null
        }
      ]
    },
    {
      id: 5,
      title: "Upcoming Content",
      weeks: "7-14",
      content: [
        {
          id: "upcoming1",
          type: "info",
          title: "Hash Tables",
          description: "Coming in Week 7"
        },
        {
          id: "upcoming2",
          type: "info",
          title: "Graphs and Graph Algorithms",
          description: "Coming in Week 9"
        },
        {
          id: "upcoming3",
          type: "info",
          title: "Advanced Sorting Algorithms",
          description: "Coming in Week 11"
        },
        {
          id: "upcoming4",
          type: "info",
          title: "Algorithm Design Techniques",
          description: "Coming in Week 13"
        }
      ]
    }
  ],
  resources: [
    {
      id: 1,
      title: "Textbook",
      description: "Data Structures and Algorithm Analysis in Java, 3rd Edition by Mark Allen Weiss",
      link: null
    },
    {
      id: 2,
      title: "Visualizing Data Structures",
      description: "Interactive visualizations of various data structures",
      link: "https://visualgo.net/"
    },
    {
      id: 3,
      title: "Practice Problems",
      description: "Additional practice problems for each topic",
      link: "https://aub.edu.lb/courses/cmps270/practice"
    }
  ],
  students: 28,
  progress: 35 // percentage of course completed
};
