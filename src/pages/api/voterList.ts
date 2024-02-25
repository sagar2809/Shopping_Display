// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initMongoose } from "@/lib/mongoose";
import { Voter } from "@/models/Voters";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  voterId: Number;
  name: String;
  gardian: String;
  area: String;
  date: String;
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { search } = req.query;
  await initMongoose();
  let data = [];
  if (search) {
    data = await Voter.aggregate([
      {
        $search: {
          index: "default",
          compound: {
            should: [
              {
                text: {
                  query: search,
                  path: "name",
                  score: { boost: { value: 12 } },
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                text: {
                  query: search,
                  path: "gardian",
                  score: { boost: { value: 3 } },
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                text: {
                  query: search,
                  path: "area",
                  score: { boost: { value: 1 } },
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                text: {
                  query: search,
                  path: "date",
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                text: {
                  query: search,
                  path: ["name", "gardian", "area", "date"],
                  fuzzy: { maxEdits: 2 },
                },
              },
            ],
          },
        },
      },
      {
        $project: {
          score: { $meta: "searchScore" },
          _id: 1,
          name: 1,
          gardian: 1,
          voterId: 1,
          area: 1,
          date: 1,
        },
      },
    ]).sort({ score: -1 });
  } else {
    data = await Voter.find();
  }
  res.status(200).json(data);
}
