import { resolve } from 'path';
import { readFile } from 'fs/promises';

export enum availableTemplates {
  Default = 'defaultEmailTemplate.html',
}

const templateCache: Record<availableTemplates, string> = {
  [availableTemplates.Default]: '',
};

export async function getEmailTemplate(template: availableTemplates): Promise<string | null> {
  if (templateCache[template]) {
    return templateCache[template];
  }

  try {
    const emailTemplate = await readFile(resolve('src', 'templates', template), {
      encoding: 'utf-8',
    });

    templateCache[template] = emailTemplate;

    return emailTemplate;
  } catch (err) {
    return null;
  }
}
