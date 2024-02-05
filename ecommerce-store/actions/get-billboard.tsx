import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id?: string): Promise<Billboard> => {
  if (!id) {
    const res = await fetch(`${URL}/billboards`);
    const billboards = await res.json();
    return billboards[0];
  }
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;
