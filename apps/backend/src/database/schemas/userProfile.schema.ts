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

const UserProfileTable = pgTable('user_profile', {
    Id: uuid("id").primaryKey().notNull().$default(() => nanoId()),
    UId: uuid("uid").notNull(),

    // Display name
    DisplayName: text("display_name"),

    // Private email and public email
    PublicEmail: text("public_email"),
    IsEmailPrivate: boolean("is_email_private").notNull().default(false),
    
    // Additional profile information
    Bio: text("bio"),
    Description: text("description"),
    Gender: text("gender"),
    // Avatar URLs
    AvatarUrl: text("avatar_url"),
    AvatarEmailUrl: text("avatar_email_url"),
    UseCustomAvatar: boolean("use_custom_avatar").notNull().default(false),
    Location: text("location"),
    Organization: text("organization"),
    // Social media URLs
    SocialMediaUrls1: text("social_media_urls"),
    SocialMediaUrls2: text("social_media_urls_2"),
    SocialMediaUrls3: text("social_media_urls_3"),
    SocialMediaUrls4: text("social_media_urls_4"),
    IsDisplayCurrentLocalTime: boolean("is_display_current_local_time").notNull().default(false),
    TimeZone: text("time_zone"),
    CreatedAt: integer("created_at").notNull().$default(() => timestampToUnix(Date.now())),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now())),
})