import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core"
import { timestampToUnix } from "../../utils/time"

const UserStatsTable = pgTable("user_stats", {
    UserId: uuid("user_id").notNull(),
    NumFollowers: integer("num_followers").notNull().default(0),
    NumFollowing: integer("num_following").notNull().default(0),
    NumStars: integer("num_stars").notNull().default(0),
    NumRepos: integer("num_repos").notNull().default(0),
    NumTeams: integer("num_teams").notNull().default(0),
    NumMembers: integer("num_members").notNull().default(0),
    CreatedAt: integer("created_at").notNull().$default(() => timestampToUnix(Date.now())),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now())),
})