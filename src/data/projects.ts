import { getCollection } from 'astro:content';

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;

/** Professional case studies and side projects, each sorted by `order`. */
export async function getProjects() {
  const all = await getCollection('projects');
  return {
    work: all.filter((p) => p.data.kind === 'work').sort(byOrder),
    side: all.filter((p) => p.data.kind === 'side').sort(byOrder),
  };
}
