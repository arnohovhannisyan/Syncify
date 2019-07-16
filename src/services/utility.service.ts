export class UtilityService {
  public static sleep(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
  }
}
