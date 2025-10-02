# AI Referencing & Citation Game 🤖📚

An interactive game focused on helping students apply correct academic referencing for AI tools (e.g., ChatGPT) alongside traditional sources. It now emphasises: including prompts, citing model versions, disclosing usage, and creating transparent appendices—aligned with emerging JCQ-style guidance on responsible AI use in assessments.

## 🎮 Game Overview

The Academic Referencing Game presents students with incomplete academic references that are "falling" down the screen. Players must quickly select the correct, properly formatted citation from three options before the reference reaches the bottom. The game covers multiple academic subjects and helps reinforce proper citation formatting skills.

## ✨ Features

- NEW AI Subject: Dedicated pool of AI citation examples (model outputs, prompts, technical reports, methodology notes)
- Appendix Prompt Mode: Falling editable chat transcript; choose best practice (e.g., avoid screenshots, include prompt, model version, date/time)
- In-text Citation Mode: Identify the correct Harvard-style in‑text citation
- Full Reference Mode: Select the fully correct formatted reference (books, articles, reports, AI outputs)
- Methodology / Disclosure Examples: Shows how to ethically declare AI assistance
- Score Tracking & Progressive Difficulty: Maintain streak awareness under time pressure
- Accessible & Responsive UI: Keyboard friendly, mobile adaptive
- Educational Hints: Subtle reinforcement (editable transcript vs “Make this uneditable (screenshot)” distractor)

## 🎯 How to Play

1. Select a Subject from the dropdown
2. A question appears in one of two modes:
   - Reference mode: a partially blanked reference falls from the top
   - In-text mode: a full reference displays with a sample paragraph
3. Choose the correct option from the three choices at the bottom
4. Beat the Clock: in Reference mode, answer before it reaches the bottom (In-text mode has no fall)
5. Build Your Score: each correct answer increases your score
6. Restart: after Game Over, click the Restart button to play again

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/taggatron/Referencinggame.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Referencinggame
   ```

3. **Open the game**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

4. **Start playing**!

## 📁 Project Structure

```
Referencinggame/
├── index.html          # Main HTML file
├── game.js             # Game logic and functionality
├── style.css           # Styling and animations
└── README.md           # Project documentation
```

## 🎨 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, shadows, and responsive design
- **Vanilla JavaScript**: Game logic, animations, and interactivity

### Key Features Implementation
- **Falling Animation**: Smooth 60fps animation using `setInterval`
- **Dynamic Content**: Subject-based question pools with randomization
- **Responsive Layout**: Flexible design that adapts to different screen sizes
- **Score System**: Real-time score tracking and display

## 🎓 Educational Value & JCQ-Style AI Referencing Principles

While you must always follow your institution’s specific guidance, emerging UK (e.g., JCQ-style) expectations for responsible student AI use commonly emphasise:

1. Transparency: Declare that an AI tool was used and HOW it was used.
2. Attribution: Cite AI outputs if they directly inform wording, structure, examples, or summarisation.
3. Prompt Accountability: Preserve the exact prompt(s) used (appendix) so academic judgement can verify originality and integrity.
4. Version & Date: Record model name/version and access/generation date & time (models change over time).
5. Verification: Fact‑check and critically evaluate AI outputs (don’t accept hallucinations). Avoid representing AI-generated content as your own analysis.
6. No Hidden Screenshots: Provide searchable text transcripts; screenshots reduce accessibility and auditability.

### AI Referencing Patterns (Harvard-style examples)

In‑text citation (tool as corporate author): (OpenAI, 2025)
Narrative form: According to OpenAI (2025)…

Reference list (model interaction with prompt disclosure):
OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Prompt: "Explain the ethical implications of AI in secondary education, focusing on assessment integrity." Generated 19 September 2025. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).

Reference list (technical report):
OpenAI. (2023). GPT-4 Technical Report. Available at: https://arxiv.org/abs/2303.08774 (Accessed: 19 September 2025).

Methodology / disclosure note (often placed in introduction or appendix, not necessarily reference list):
An AI tool (ChatGPT, Sep 2025 version, OpenAI) was used to brainstorm alternative phrasing for section 2. Outputs were fact‑checked, paraphrased, and cited where directly relied upon (see Appendix A for prompt transcript).

Appendix transcript best practice (selected as correct in-game): Provide a clearly labelled appendix with: prompt(s), model name & version, date/time, any system instructions, and a note of edits. Do NOT rely on an uneditable screenshot.

Quoted output example (if verbatim):
"Overfitting occurs when a model memorises training noise" (OpenAI, 2025).

Paraphrased example: Overfitting is when a model memorises patterns that do not generalise (OpenAI, 2025).

Tip: If multiple prompts were used, list them sequentially with timestamps.


This game helps students with:
- **Citation Format Recognition**: Practice identifying correct academic formatting
- **Subject-Specific References**: Learn conventions across different academic disciplines
- **Time Management**: Develop quick recognition skills under pressure
- **Reference Components**: Understand author, year, title, publisher, and location formatting

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Add More Subjects**: Expand the question pool with additional academic areas
2. **Improve Styling**: Enhance the visual design and user experience
3. **Add Features**: Implement difficulty levels, timer options, or multiplayer modes
4. **Bug Fixes**: Report and fix any issues you encounter

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Game speed (Reference mode) is currently fixed - future versions may include difficulty settings

## 🚀 Future Enhancements

- [ ] Multi-style framework (APA, MLA, Chicago, Vancouver) with AI examples
- [ ] Adaptive difficulty (faster fall after streak)
- [ ] Analytics: track weakest citation component (author, year, prompt details)
- [ ] Integrity mode: flag incomplete AI disclosures
- [ ] Batch practice & printable summary sheet
- [ ] Optional peer review overlay

## 📧 Contact

**Daniel Tagg** - [@taggatron](https://github.com/taggatron)

Project Link: [https://github.com/taggatron/Referencinggame](https://github.com/taggatron/Referencinggame)

## 🙏 Acknowledgments

- Inspired by the need for better academic writing tools
- Designed for students and educators focusing on proper citation practices
- Built with accessibility and educational effectiveness in mind

---

**Made with ❤️ for education**
