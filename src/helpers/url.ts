import slugify from 'slugify';

export default function slug(name: string): string {
  return slugify(name, { remove: /[():]/g });
}
