# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/TUHIN729/unsent-micro-confession/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/TUHIN729/unsent-micro-confession/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the [make.fun bounty "Unsent: The Micro-Confession Sprint"](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba).

## The entry

A two-part micro-confession: a `To:` line naming who the message was meant for, and the unsent message itself — one line, written exactly as it was typed, with no explanation after it.

> To: my grandmother, who died thinking I was angry at her
>
> I wasn't angry. I was fifteen and too embarrassed to say how much I needed you.

## How it works

`main.ts` (Node 22) writes the confession to `/output/entry.txt`. The text is 1–260 characters, UTF-8, two parts, message one line of at most 200 characters — inside the competition's gate.

Run it locally:

```sh
OUTPUT_DIR=/tmp/unsent-out node main.ts
cat /tmp/unsent-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
