import bcrypt from "bcrypt";

export function isHashPasswordValid(hash: string): boolean {
  const regex = /^\$2[ayb]\$.{56}$/; // Matches bcrypt hash format
  return regex.test(hash);
}

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 12; 
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}

export function generateSalt(length: number = 16): string {
    return bcrypt.genSaltSync(length);
}

export function hashWithSalt(password: string, salt: string): string {
    return bcrypt.hashSync(password, salt);
}