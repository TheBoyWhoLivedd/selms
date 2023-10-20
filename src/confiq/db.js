//External Lib Import
const mongoose = require("mongoose");
const { error } = require("../helper/ErrorHandler");
// const ObjectId = mongoose.Types.ObjectId;

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log(" DB Connected Successfully...");
  } catch (error) {
    console.log(error);
    console.log(" DB Connected Failure...");
  }
};

module.exports = connectDB;

// const adminDepartment = new DepartmentModel({
//   DepartmentName: "Administration",
//   DepartmentShortName: "Admin",
//   DepartmentDetails: "Handles administrative tasks.",
//   DepartmentStatus: true
// });

// adminDepartment.save()
//   .then(department => {
//     console.log("Department created:", department);
//     createAdminUser(department._id);  // Pass the department's ObjectId to the next function
//   })
//   .catch(err => {
//     console.log("Error creating department:", err);
//   });

// function createAdminUser() {
//   const adminUser = new EmployeesModel({
//     DepartmentId: new ObjectId("6532586a91cd0ae89bf75285"),
//     FirstName: "Admin",
//     LastName: "User",
//     Gender: "MALE",
//     DateOfBirth: "1985-01-01",
//     Address: "123 Admin Street, Admin City, 12345",
//     Phone: "+1234567890",
//     Email: "admin@example.com",
//     Password: "$2b$10$C7rwYnnsJzKwwCQAsH8Y8OSRG5u5WDt4SbSJqioKaHHXfyNmQDWkS",  // Already hashed password
//     Roles: "ADMIN",
//     Image: "path/to/admin/image.jpg"
//   });

//   adminUser.save()
//     .then(user => {
//       console.log("Admin user created:", user);
//     })
//     .catch(err => {
//       console.log("Error creating admin user:", err);
//     });
// }

// createAdminUser()
