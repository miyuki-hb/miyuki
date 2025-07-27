import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 12; 
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}