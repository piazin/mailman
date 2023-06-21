export function replaceTemplateVariables(template: string, data: Record<string, string>): string {
  let content = template;
  Object.keys(data).forEach((key) => {
    const variable = `{{${key}}}`;
    const value = data[key];
    content = content.replace(new RegExp(variable, 'g'), value);
  });
  return content;
}
