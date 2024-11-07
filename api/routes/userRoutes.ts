import express, { Request, Response } from 'express';
import { createReadStream } from 'fs';
import { cards} from './images/cards'

const app = express()

const hasherBoy = (username: string): number => {
  const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash % cards.length;
}

const router = express.Router();

router.post('/user', function u(req: Request, res: Response){
  const { username }: { username: string } = req.body;

  if (!username) {
    return res.status(400).send({ message: 'Username is required' });
  }

  const cardsIndex = hasherBoy(username);
  const assignedCard = cards[cardsIndex];

  res.send({
    message: `Senpai ${username}, your card is ${assignedCard}`,
})
})

export default router;
