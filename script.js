const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const scoreValue = document.getElementById('scoreValue');
        const feedback = document.getElementById('feedback');
        const restartBtn = document.getElementById('restartBtn');
        const progress = document.getElementById('progress');
        const questions = [
            {
                question: "🌸 What's the main ingredient in pancakes? 🥞",
                options: ["Flour", "Sugar", "Eggs", "Milk"],
                correct: 0,
                emoji: "🥞"
            },
            {
                question: "🎀 Which planet is known as the 'Red Planet'? 🪐",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1,
                emoji: "🚀"
            },
            {
                question: "🍵 How many hearts does an octopus have? 🐙",
                options: ["1", "2", "3", "4"],
                correct: 2,
                emoji: "💖"
            },
            {
                question: "🧸 What's the chemical symbol for gold? ⚗️",
                options: ["Ag", "Fe", "Au", "Cu"],
                correct: 2,
                emoji: "✨"
            },
            {
                question: "🎂 Which country gave us the pizza? 🍕",
                options: ["France", "Italy", "USA", "China"],
                correct: 1,
                emoji: "🇮🇹"
            },
            {
                question: "🧜♀️ Which Disney princess has a crab friend named Sebastian? 🦀",
                options: ["Ariel", "Cinderella", "Belle", "Rapunzel"],
                correct: 0,
                emoji: "🌊"
              },
              {
                question: "🐝 How many wings does a bee have? 🌸",
                options: ["2", "4", "6", "8"],
                correct: 1,
                emoji: "🍯"
              },
              {
                question: "🩺 What is the largest organ in the human body? 💖",
                options: ["Liver", "Heart", "Skin", "Lungs"],
                correct: 2,
                emoji: "👩⚕️"
              },
              {
                question: "👢 Which country is shaped like a boot? 🗺️",
                options: ["France", "Italy", "Brazil", "Australia"],
                correct: 1,
                emoji: "🇮🇹"
              },
              {
                question: "💎 What color is a ruby? 🔴",
                options: ["Blue", "Green", "Red", "Yellow"],
                correct: 2,
                emoji: "✨"
              }
        ];

        let currentQuestion = 0;
        let score = 0;

        function initializeQuiz() {
            // Reset state
            currentQuestion = 0;
            score = 0;
            scoreValue.textContent = '0';
            feedback.textContent = '';
            restartBtn.style.display = 'none';
            
            // Show first question
            showQuestion();
            updateProgress();
        }

        function showQuestion() {
            const q = questions[currentQuestion];
            
            // Update question text
            questionText.innerHTML = `${q.emoji} ${q.question}`;
            
            // Clear previous options
            optionsContainer.innerHTML = '';
            
            // Create new options
            q.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.innerHTML = `🌸 ${option}`;
                button.onclick = () => checkAnswer(index);
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedIndex) {
            const correctIndex = questions[currentQuestion].correct;
            const options = document.querySelectorAll('.option-btn');
            
            options.forEach(btn => btn.disabled = true);
            
            if(selectedIndex === correctIndex) {
                options[selectedIndex].classList.add('correct');
                score += 50;
                feedback.textContent = '🎉 Correct!';
            } else {
                options[selectedIndex].classList.add('wrong');
                options[correctIndex].classList.add('correct');
                feedback.textContent = '😢 Wrong!';
            }
            
            scoreValue.textContent = score;
            
            setTimeout(() => {
                currentQuestion++;
                if(currentQuestion < questions.length) {
                    showQuestion();
                    updateProgress();
                } else {
                    endQuiz();
                }
            }, 1500);
        }

        function updateProgress() {
            progress.innerHTML = questions.map((_, i) => 
                `<div class="petal ${i < currentQuestion ? 'bloomed' : ''}"></div>`
            ).join('');
        }

        function endQuiz() {
            questionText.innerHTML = `🎉 Quiz Complete!<br>Score: ${score} 🍪`;
            optionsContainer.innerHTML = '';
            restartBtn.style.display = 'block';
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', initializeQuiz);
        restartBtn.onclick = initializeQuiz;