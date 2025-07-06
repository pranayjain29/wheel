// main.js – Spin-the-Wheel implementation

const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');
const rewardText = document.getElementById('reward-text');
const rewardContainer = document.getElementById('reward');

// Rewards corresponding to each segment (update as needed)
const rewards = [
  'Reward 1',
  'Reward 2',
  'Reward 3',
  'Reward 4',
  'Reward 5',
  'Reward 6',
  'Reward 7',
  'Reward 8',
];

if (wheel && spinButton) {
  spinButton.addEventListener('click', () => {
    spinButton.disabled = true; // prevent multiple clicks

    const segmentAngle = 360 / rewards.length;
    const spins = Math.floor(Math.random() * 4) + 4; // 4–7 full rotations
    const pickedIdx = Math.floor(Math.random() * rewards.length);
    const finalAngle = spins * 360 + pickedIdx * segmentAngle + segmentAngle / 2;

    wheel.style.transform = `rotate(${finalAngle}deg)`;

    // Reveal reward after wheel animation (duration matches CSS transition ~4s)
    setTimeout(() => {
      rewardText.textContent = rewards[pickedIdx];
      rewardContainer.style.display = 'block';
      spinButton.disabled = false;
    }, 4000);
  });
}