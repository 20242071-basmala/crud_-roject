Product Management System (CRUD)
A lightweight, web-based Product Management System built with HTML, CSS, and Vanilla JavaScript. This application allows users to perform standard CRUD operations (Create, Read, Update, Delete) along with real-time price calculations and advanced searching.

🚀 Features
Real-time Total Calculation: Automatically calculates the final price based on cost, taxes, ads, and discounts with visual feedback (color changes).  Data Persistence: Uses localStorage to save product data so information is not lost when the page is refreshed.  Bulk Operations:Count Property: Create multiple copies of a product at once.  Delete All: Clear the entire database with a single click.  Search Functionality: Dynamic search filters that allow you to find products by Title or Category instantly as you type.  Smooth UX: Features automatic scrolling to the top when updating a product and a clean, dark-themed responsive interface.  

🛠️ Technologies Used
HTML5: Structure of the dashboard and data tables.  

CSS3: Custom styling with a dark aesthetic and interactive button transitions.  

JavaScript (ES6): Core logic for data manipulation, storage handling, and DOM updates.

File Structure
main.html: The layout containing input fields for product details (title, price, taxes, etc.) 
and the display table.  

style.css: The visual design, including the layout for the search bar and table formatting.  

script.js: The "brain" of the project, handling functions like gettotal, saveproduct, searchData, and updateproduct.
