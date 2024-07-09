import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, uniqueIndex  } from "drizzle-orm/sqlite-core";

// User table with roles as a comma-separated string
export const user = sqliteTable("user", {
  id: integer("id", {
    mode: 'number'
  }).primaryKey({ autoIncrement: true }),
  name: text("name", {
    length: 255,
  }),
  email: text("email", {
    length: 255,
  }).unique().notNull(),
  hashedPassword: text("hashed_password", {
    length: 255,
  }),
  isVerified: integer('is_verified', { mode: 'boolean' }).notNull().default(false),
  createdAt: integer("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at").notNull(),
});



// Role table
export const role = sqliteTable("role", {
  id: integer("id", {
    mode: 'number'
  }).primaryKey({ autoIncrement: true }),
  name: text("name", {
    length: 255,
  }).unique().notNull(),
  createdAt: integer("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at").notNull(),
});

export const userRole = sqliteTable("user_role", {
  id: integer("id", {
    mode: 'number'
  }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => user.id, { onDelete: 'cascade' }).notNull(),
  userEmail: text("user_email", {
    length: 255,
  }).references(() => user.email, { onDelete: 'cascade' }).notNull(),
  roleId: integer("role_id").references(() => role.id, { onDelete: 'cascade' }).notNull(),
  roleName: text("role_name", {
    length: 255,
  }).references(() => role.name, { onDelete: 'cascade' }).notNull(),
  createdAt: integer("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at").notNull(),
}, (table) => ({
  unique: uniqueIndex("unique_user_role").on(table.userId, table.roleId)
}));



// Permission table
export const permission = sqliteTable("permission", {
  id: integer("id", {
    mode: 'number'
  }).primaryKey({ autoIncrement: true }),
  name: text("name", {
    length: 255,
  }).unique().notNull(),
  type: text("type", {
    enum: ["collection" , "page"], 
  }).notNull(),
  createdAt: integer("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at").notNull(),
});

// RolePermission table
export const rolePermission = sqliteTable("role_permission", {
  id: integer("id", {
    mode: 'number'
  }).primaryKey({ autoIncrement: true }),
  roleId: integer("role_id").references(() => role.id, { onDelete: 'cascade' }).notNull(),
  roleName: text("role_name", {
    length: 255,
  }).references(() => role.name, { onDelete: 'cascade' }).notNull(),
  permissionId: integer("permission_id").references(() => permission.id, { onDelete: 'cascade' }).notNull(),
  permissionName: text("permission_name", {
    length: 255,
  }).references(() => permission.name, { onDelete: 'cascade' }).notNull(),
  readAccess: integer("read_access", { mode: 'boolean' }).notNull().default(false),
  writeAccess: integer("write_access", { mode: 'boolean' }).notNull().default(false),
  createdAt: integer("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at").notNull(),
}, (table) => ({
  unique: uniqueIndex("unique_role_permission").on(table.roleId, table.permissionId)
}));
