import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core"
import { timestampToUnix } from "../../utils/time"

const UserSettingsTable = pgTable("user_settings", {
    UserId: uuid("user_id").notNull(),
    EnableEmailNotifications: boolean("enable_email_notifications").notNull().default(true),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now())),
})