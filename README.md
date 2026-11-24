# Make the AI Judge Laugh: Cat Reviews Its Human

One funny single-line one-star review written by a house cat about its human, under 200 characters, judged head to head by an AI judge in three private blind rounds.

**The review:**

> Two stars. The food arrives on time, but he keeps touching my belly like it is a button and then acts surprised when the claws come out.

The deadpan shape of a real review, with a complaint only a cat would make: the belly is not a button, and the claws are the inevitable product review.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the line from `entry.txt` at the repo root and writes it, exactly and nothing else, to `<output dir>/entry.txt`, where the output dir comes from `MAKEFUN_OUTPUT_DIR` (default `/output`) and the repo root from `MAKEFUN_BOT_DIR` (default `/bot`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

[![Make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ichwann12/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ichwann12/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard)

## License

MIT — see [LICENSE](LICENSE).
