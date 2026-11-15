# Beyond Linear Decodability

Project page for **Beyond Linear Decodability: Understanding and Improving Instruction Following in World Action Models**.

[Open the project homepage](https://ruflect-intelligence.github.io/LDS-Homepage/)

- [RoboTwin-IF evaluator](https://github.com/RuFlect-Intelligence/RoboTwin-IF)
- [RoboTwin-IF dataset and evaluation assets](https://huggingface.co/datasets/RuFlect/RoboTwin-IF)
- Fine checkpoints on Hugging Face: [OpenWAM](https://huggingface.co/RuFlect/RoboTwin-IF-OpenWAM-LDS), [LingBot-VA](https://huggingface.co/RuFlect/RoboTwin-IF-LingBot-VA-LDS), [InternW0-Δ](https://huggingface.co/RuFlect/RoboTwin-IF-InternW0-Delta-LDS)

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:8000/`.

## Publishing and updates

In the repository's **Settings → Pages**, set the publishing source to **Deploy from a branch**, select the default branch and **/(root)**, and save. The site uses plain HTML, CSS, JavaScript, and local media. The `.nojekyll` file tells GitHub Pages to serve the source directly.

When the paper is on arXiv, replace the element with `id="paper-link"` in `index.html` with an anchor to the paper's arXiv abstract page. Keep the `resource-link` class for the existing button styling.
