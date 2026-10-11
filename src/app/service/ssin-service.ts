import {Service} from '@angular/core';

@Service()
export class SsinService {

  private static readonly SIZE: number = 11;
  private static readonly TEMPLATE: string = "{0}{1}.{2}{3}.{4}{5}-{6}{7}{8}.{9}{10}";

  public static stripSsin(ssin: string | null): string {
    return (ssin === null) ? "" : ssin.replace(/\D/g, "").substring(0, SsinService.SIZE);
  }

  public static formatSsin(ssin: string | null): string {
    ssin = SsinService.stripSsin(ssin);
    const digits: string[] = (ssin.match(/\d/g) || []).map(String);
    for (let i = digits.length; i < SsinService.SIZE; i++) {
      digits.push("");
    }

    return SsinService.TEMPLATE.replace(/{\d+}/g, (match: string) => {
      const index = parseInt(match.substring(1, match.length - 1));
      return digits[index];
    });
  }
}
