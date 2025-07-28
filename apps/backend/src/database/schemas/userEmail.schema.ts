import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core"
import { timestampToUnix } from "../../utils/time"
import { nanoId } from "../../utils/uuid"

const UserEmailTable = pgTable("user_email", {
    Id: uuid("id").primaryKey().notNull().$default(() => nanoId()),
    UId: uuid("uid").notNull(),
    Email: text("email").notNull().unique(),
    LowerEmail: text("lower_email").notNull().unique(),
    IsPrimary: boolean("is_primary").notNull().default(false),
    IsVerified: boolean("is_verified").notNull().default(false),
    IsPrivate: boolean("is_private").notNull().default(false),
    VerificationCode: text("verification_code"),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now()))
})