
# VenuEase – Venue Booking System  

## Overview  
**VenuEase** is a full-stack web application designed to simplify venue booking at COEP. It provides a seamless, user-friendly platform for students, faculty, and administrators to manage reservations for the Main Auditorium, Mini Auditorium, and Cognizant Lab. The system is tailored to eliminate traditional booking hurdles, offering features such as customizable seating, priority-based venue selection, and automated approvals.  

---

## Features  

### **User-Friendly Website**  
- Interactive and responsive design for ease of access.   
- Distinct logins for students and administrators.  

### **Booking Interface**  
- Displays venue images, facilities, and terms of use.  
- Offers customizable seating options for Cognizant Lab, such as selecting specific seats or columns.  
- Provides ordered or random seating arrangements for exams.  
- Includes a priority-based booking system: users rank venues by preference, automatically allocating the next venue if the first choice is unavailable.  

### **Admin Dashboard for Venue Management**  
- Block booking of venues for maintenance or specific events.  
- Approve or reject bookings with the option to send personalized notes to users.  
- Prioritize admin requests over student bookings for the same time slot.  
- Allocate venues based on a "first-come, first-served" basis for students with overlapping requests.  

### **Confirmation and Cancellation Interface**  
- Enables features like food ordering, booking cancellation, and feedback submission upon admin approval.  
- Food ordering integrates with Meta and Boat Club canteens for event refreshments.  

---

## Tools and Technologies  
- **Frontend**: HTML, CSS, JavaScript, Bootstrap  
- **Backend**: MongoDB  

---

## Setup Instructions  
1. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd venu-ease  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  
4. Start the development server:  
   ```bash  
   npm start  
   ```  

---

## How It Works  
1. Users log in with their COEP credentials and select their desired venue.  
2. Booking requests are processed based on availability, seating options, and priority preferences.  
3. Admins review and approve/reject requests while managing venue availability and sending confirmation emails.  
4. Users receive updates and can submit feedback after their event concludes.  

---

## Demo  
[Watch the Demo Video](#) *(Link to be added)*  

---

## Impact  
**VenuEase** transforms how COEP students and staff book venues by:  
- Streamlining booking processes.  
- Reducing logistical delays.  
- Ensuring efficient use of college facilities.  

---

## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

## Acknowledgments  
- Thanks to COEP for inspiring the development of this system.  
- Special mention to all contributors and mentors for their guidance.  
