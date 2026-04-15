# EmailJS Template Setup

## Template Variables (use exactly these in your EmailJS template)

{{from_name}}       - Parent's full name
{{phone}}           - Parent's phone number
{{from_email}}      - Parent's email
{{student_name}}    - Student's name
{{student_class}}   - Class applied for
{{branch}}          - Branch name (Sayeedabad / Tolichowki / Jahanuma / Karimnagar)
{{branch_email}}    - Auto-routed branch email address
{{reply_to}}        - Same as from_email (for reply-to header)

## Suggested Email Template (paste into EmailJS template editor)

Subject: New Admission Enquiry — {{branch}} Branch

---

Dear IPS {{branch}} Team,

A new admission enquiry has been received. Details below:

Parent Name   : {{from_name}}
Phone         : {{phone}}
Email         : {{from_email}}

Student Name  : {{student_name}}
Class Applied : {{student_class}}
Branch        : {{branch}}

Please follow up within 24 hours.

---
IPS International Group of Schools
www.ipsinternational.co.in
