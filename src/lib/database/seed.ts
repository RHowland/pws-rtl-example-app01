import { db } from "../../../dbConnect";
import { permission, role, rolePermission, user, userRole } from "./schema";

// function formatDate(timestamp : any) {
//   const date = new Date(timestamp);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");
//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// }

// // Sample data with formatted updatedAt
// const nowFormatted = formatDate(Date.now())


// Sample data

// Roles data
const roles = [
  { id: 1, name: "Admin" , updatedAt: Date.now(), },
  { id: 2, name: "SalesMgr" , updatedAt: Date.now(),},
  { id: 3, name: "SalesPerson" , updatedAt: Date.now(),},
  { id: 4, name: "ContentMgr" , updatedAt: Date.now(),},
  { id: 5, name: "ContentEditor" , updatedAt: Date.now(),},
  { id: 6, name: "Client" , updatedAt: Date.now(),},
  { id: 7, name: "PWSAdmin" , updatedAt: Date.now(),},
  { id: 8, name: "Anonymous" , updatedAt: Date.now(),},
];

// Permissions data
enum permissionType{
  collection = "collection",
  page = "page"
}
const permissions = [
  { id: 1, name: "Dashboard Menu", type: permissionType["page"] , updatedAt: Date.now()},
  { id: 2, name: "UserData Page", type: permissionType["page"] , updatedAt: Date.now()},
  { id: 3, name: "Content Page", type: permissionType["page"] , updatedAt: Date.now()},
  { id: 4, name: "Analytics Page", type: permissionType["page"] , updatedAt: Date.now()},
  { id: 5, name: "Proposal Page", type: permissionType["page"] , updatedAt: Date.now()},
  { id: 6, name: "LogData Page", type: permissionType["page"], updatedAt: Date.now()},
  { id: 7, name: "Read Content", type: permissionType["collection"] , updatedAt: Date.now()},
  { id: 8, name: "Update Text", type: permissionType["collection"] , updatedAt: Date.now()},
  { id: 9, name: "Update Images", type: permissionType["collection"] ,updatedAt: Date.now()},
  { id: 10, name: "Publish Content", type: permissionType["collection"] ,updatedAt: Date.now()},
  { id: 11, name: "Create Proposal", type: permissionType["collection"] ,updatedAt: Date.now()},
  { id: 12, name: "Create Price Quote", type: permissionType["collection"] ,updatedAt: Date.now()},
];

// RolePermission data
const rolePermissions = [
  // General Access Permissions
  { roleId: 1, roleName: "Admin", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now() },
  { roleId: 1, roleName: "Admin", permissionId: 2, permissionName: "UserData Page", readAccess: true, writeAccess: true, updatedAt: Date.now() },
  { roleId: 1, roleName: "Admin", permissionId: 3, permissionName: "Content Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 4, permissionName: "Analytics Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 5, permissionName: "Proposal Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 6, permissionName: "LogData Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 3, permissionName: "Content Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 4, permissionName: "Analytics Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 5, permissionName: "Proposal Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 3, roleName: "SalesPerson", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 3, roleName: "SalesPerson", permissionId: 5, permissionName: "Proposal Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 3, permissionName: "Content Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 4, permissionName: "Analytics Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 1, permissionName: "Dashboard Menu", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 2, permissionName: "UserData Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 3, permissionName: "Content Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 4, permissionName: "Analytics Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 5, permissionName: "Proposal Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 6, permissionName: "LogData Page", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  // Content Editor Permissions
  { roleId: 1, roleName: "Admin", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 8, permissionName: "Update Text", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 9, permissionName: "Update Images", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 10, permissionName: "Publish Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 3, roleName: "SalesPerson", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 8, permissionName: "Update Text", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 9, permissionName: "Update Images", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 4, roleName: "ContentMgr", permissionId: 10, permissionName: "Publish Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 8, permissionName: "Update Text", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 9, permissionName: "Update Images", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 10, permissionName: "Publish Content", readAccess: true, writeAccess: false , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 7, permissionName: "Read Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 8, permissionName: "Update Text", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 9, permissionName: "Update Images", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 10, permissionName: "Publish Content", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  // Proposal Editor Permissions
  { roleId: 1, roleName: "Admin", permissionId: 11, permissionName: "Create Proposal", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 11, permissionName: "Create Proposal", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 3, roleName: "SalesPerson", permissionId: 11, permissionName: "Create Proposal", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 5, roleName: "ContentEditor", permissionId: 11, permissionName: "Create Proposal", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 11, permissionName: "Create Proposal", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  // Price Quote Page Permissions
  { roleId: 6, roleName: "Client", permissionId: 12, permissionName: "Create Price Quote", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 1, roleName: "Admin", permissionId: 12, permissionName: "Create Price Quote", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 2, roleName: "SalesMgr", permissionId: 12, permissionName: "Create Price Quote", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 3, roleName: "SalesPerson", permissionId: 12, permissionName: "Create Price Quote", readAccess: true, writeAccess: true , updatedAt: Date.now()},
  { roleId: 7, roleName: "PWSAdmin", permissionId: 12, permissionName: "Create Price Quote", readAccess: true, writeAccess: true , updatedAt: Date.now()},
];





const users = [
  { id: 1, name: "Alice Admin", email: "alice@example.com", hashedPassword: "hashed_password_1", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 2, name: "Bob SalesMgr", email: "bob@example.com", hashedPassword: "hashed_password_2", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 3, name: "Charlie SalesPerson", email: "charlie@example.com", hashedPassword: "hashed_password_3", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 4, name: "Dave ContentMgr", email: "dave@example.com", hashedPassword: "hashed_password_4", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 5, name: "Eve ContentEditor", email: "eve@example.com", hashedPassword: "hashed_password_5", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 6, name: "Frank Client", email: "frank@example.com", hashedPassword: "hashed_password_6", isVerified: false, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 7, name: "Grace PWSAdmin", email: "grace@example.com", hashedPassword: "hashed_password_7", isVerified: true, createdAt: Date.now(), updatedAt: Date.now() },
  { id: 8, name: "Hannah Anonymous", email: "hannah@example.com", hashedPassword: "hashed_password_8", isVerified: false, createdAt: Date.now(), updatedAt: Date.now() },
];

const userRoles = [
  { id: 1, userId: 1, userEmail: "alice@example.com", roleId: 1, roleName: "Admin", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 2, userId: 2, userEmail: "bob@example.com", roleId: 2, roleName: "SalesMgr", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 3, userId: 3, userEmail: "charlie@example.com", roleId: 3, roleName: "SalesPerson", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 4, userId: 4, userEmail: "dave@example.com", roleId: 4, roleName: "ContentMgr", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 5, userId: 5, userEmail: "eve@example.com", roleId: 5, roleName: "ContentEditor", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 6, userId: 6, userEmail: "frank@example.com", roleId: 6, roleName: "Client", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 7, userId: 7, userEmail: "grace@example.com", roleId: 7, roleName: "PWSAdmin", createdAt: Date.now(), updatedAt: Date.now() },
  { id: 8, userId: 8, userEmail: "hannah@example.com", roleId: 8, roleName: "Anonymous", createdAt: Date.now(), updatedAt: Date.now() },
];




// Seed function
async function seed() {
  await db.insert(user).values(users);
  await db.insert(role).values(roles);
  await db.insert(permission).values(permissions);
  await db.insert(userRole).values(userRoles);
  await db.insert(rolePermission).values(rolePermissions);
}

// Call the seed function
seed()
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
  });
