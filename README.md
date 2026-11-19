# Beyond Linear Decodability

Project page for **Beyond Linear Decodability: Understanding and Improving Instruction Following in World Action Models**.

[Open the project homepage](https://ruflect-intelligence.github.io/LDS-Homepage/)

- [Linear Decodability Supervision code](https://github.com/RuFlect-Intelligence/Linear-Decodability-Supervision)
- [RoboTwin-IF evaluator](https://github.com/RuFlect-Intelligence/RoboTwin-IF)
- [RoboTwin-IF dataset and evaluation assets](https://huggingface.co/datasets/RuFlect/RoboTwin-IF)
- [ModelScope organization](https://www.modelscope.ai/organization/Ruflect-Intelligence)

The Hugging Face dataset and evaluation assets are fully uploaded and public.
The ModelScope button currently opens the organization page while its mirror
uploads. When the dataset mirror is public, update `id="modelscope-link"` to
`https://www.modelscope.ai/datasets/Ruflect-Intelligence/RoboTwin-IF` and remove
the organization-page suffix from its accessible label. Checkpoint links belong
in the LDS code repository README.

Resource buttons use local platform icons; sources are recorded in
[the icon attribution file](static/img/icons/README.md).

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:8000/`.

## Publishing and updates

In the repository's **Settings → Pages**, set the publishing source to **Deploy from a branch**, select the default branch and **/(root)**, and save. The site uses plain HTML, CSS, JavaScript, and local media. The `.nojekyll` file tells GitHub Pages to serve the source directly.

When the paper is on arXiv, replace the element with `id="paper-link"` in `index.html` with an anchor to the paper's arXiv abstract page. Keep the `resource-link` class and icon, and remove `resource-pending` and the “Coming soon” status.
