var nameList = [
  "Arjun", "Emily", "Rohan", "Sarah", "Priya", "Michael", "Kabir", "Emma", "Veer", "Olivia", 
  "Rhea", "Daniel", "Rajat", "Sophia", "Naina", "Matthew", "Ishaan", "Ava", "Kavya", "James", 
  "Meera", "Isabella", "Aarav", "Benjamin", "Siya", "Mia", "Karan", "Amelia", "Tara", "Andrew", 
  "Yash", "Charlotte", "Pooja", "Alexander", "Devika", "Harper", "Varun", "Joshua", "Sneha", "Scarlett", 
  "Siddharth", "Ryan", "Anjali", "Lily", "Akash", "Grace", "Maya", "Zoe", "Rahul", "Ella", 
  "Krisha", "Chloe", "Manav", "Madison", "Sanya", "Abigail", "Sanjay", "Victoria", "Kritika", "Jonathan", 
  "Shivani", "Hannah", "Gaurav", "Natalie", "Nikhil", "Lillian", "Ankita", "Audrey", "Hrithik", "Stella", 
  "Ankur", "Leah", "Neha", "Bella", "Harsh", "Lucy", "Pallavi", "Ruby", "Aditya", "Layla", 
  "Sameer", "Mila", "Trisha", "Violet", "Shreya", "John", "Virat", "David", "Deepika", "Christopher", 
  "Sushant", "Ethan", "Shruti", "Noah", "Vijay", "William", "Swati", "Samuel", "Ruchi", "Nicholas", 
  "Chetan", "Adam", "Ranjan", "Aaron", "Alok", "Charles", "Kiran", "George", "Dhruv", "Patrick", 
  "Sunita", "Richard", "Ramesh", "Steven", "Sudha", "Kevin", "Lalit", "Thomas", "Vandana", "Jason", 
  "Raj", "Brandon", "Sapna", "Brian", "Rohit", "Jonathan", "Vandit", "Anthony", "Jagdeep", "Benjamin", 
  "Aishwarya", "Alexander", "Bhavana", "Joshua", "Charu", "Matthew", "Nisha", "Ryan", "Usha", "Jacob", 
  "Prakash", "Nathan", "Manisha", "Logan", "Parth", "Dylan", "Jaya", "Zachary", "Jitesh", "Lucas", 
  "Madhuri", "Eric", "Reena", "Liam", "Gopi", "Mason", "Bhavna", "Tyler", "Suraj", "Kyle", 
  "Kamal", "Owen", "Sunil", "Robert", "Krishna", "Henry", "Gauri", "Simon", "Sachin", "Austin", 
  "Alisha", "Oliver", "Asha", "Jack", "Aman", "Ethan", "Bindiya", "Daniel", "Vikas", "Paul", 
  "Chitra", "Carl", "Milan", "Simon", "Ranveer", "Richard", "Anirudh", "Edward", "Pankaj", "Victor", 
  "Smita", "Philip", "Pranav", "Oscar", "Deeksha", "Timothy", "Vikram", "Mark", "Arushi", "Frank", 
  "Sameeksha", "Jerry", "Karuna", "Alan"
]

let messageList=[
  "India will surely win this time", 
  "No way, New Zealand is too strong", 
  "What do you think about Indias chances", 
  "Virat Kohli will score a century today", 
  "Dhonis leadership was unmatched", 
  "Rohit Sharmas form is unbeatable", 
  "Hey, chai peene chalein (Shall we go for tea)", 
  "Sachin Tendulkar is still the GOAT", 
  "IPL fever is back in full swing", 
  "Did you watch the latest Bollywood movie", 
  "Kashmir ki vaadiyan bahut khoobsurat hain (The valleys of Kashmir are very beautiful)", 
  "Biryani is the ultimate comfort food", 
  "Namaste! How have you been", 
  "Mumbai Indians will win the IPL again", 
  "Chennai Super Kings are unbeatable this season", 
  "Yeh match bahut hi zabardast hone wala hai (This match is going to be amazing)", 
  "Khaana khaya (Have you eaten)", 
  "Delhi Capitals will surprise everyone this year", 
  "Indias bowling attack is looking strong", 
  "Hyderabad is famous for its biryani and pearls"
]


export function generateRaandomName() {
    return  nameList[Math.floor(Math.random() * nameList.length)];     
};
export function generateRaandomMessage() {
    return  messageList[Math.floor(Math.random() * messageList.length)];     
};