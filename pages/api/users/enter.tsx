import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 9000000) + '';

  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: 'Anonymous',
  //     ...payload,
  //   },
  //   update: {},
  // });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          // user가 없으면 phone 조건 혹은 email 조건에 따라 생성하면서 token도 생성
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  console.log(token);


  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log('이미 같은 이메일이 존재하는 유저');
  //   if (!user) {
  //     console.log('처음 생성하는 핸드폰 유저 생성');
  //     await client.user.create({
  //       data: {
  //         name: 'Anonymous',
  //         email,
  //       },
  //     });
  //   }
  // }

  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log('이미 같은 폰이 존재 하는 유저');
  //   if (!user) {
  //     console.log('처음 생성하는 핸드폰 유저 생성');
  //     await client.user.create({
  //       data: {
  //         name: 'Anonymous',
  //         phone: +phone,
  //       },
  //     });
  //   }
  // }

  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
