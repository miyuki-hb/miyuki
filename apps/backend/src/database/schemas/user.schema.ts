import { 
    integer, 
    uuid, 
    text,
    timestamp,
    boolean,
    pgTable,
    jsonb,
} from "drizzle-orm/pg-core"
import { Name, relations } from "drizzle-orm"
import { uniqueIndex, index } from "drizzle-orm/pg-core"
import { json } from "drizzle-orm/gel-core"
import { nanoId } from "../../utils/uuid"
import { timestampToUnix } from "../../utils/time"

const UserTable = pgTable('user', {
    Id: uuid("id").primaryKey().notNull().$default(() => nanoId()),
    Name: text("name").notNull().unique(),
    LowerName: text("lower_name").notNull().unique(),

    Email: text("email").notNull().unique(),
    Password: text("password").notNull(),
    IsMustToChangePassword: boolean("is_must_to_change_password").notNull().default(false),
    IsEmailVerified: boolean("is_email_verified").notNull().default(false),
    EmailVerifiedAt: timestamp("email_verified_at", { withTimezone: true }).defaultNow(),

    UserType: text("user_type").notNull().default("user"),
    IsActive: boolean("is_active").notNull().default(true),
    IsAdmin: boolean("is_admin").notNull().default(false),
    IsDeleted: boolean("is_deleted").notNull().default(false),
    IsBanned: boolean("is_banned").notNull().default(false),

    CreatedAt: integer("created_at").notNull().$default(() => timestampToUnix(Date.now())),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now())),
})