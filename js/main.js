// // Code Generated by Sidekick is for learning and experimentation purposes only.
// import { supabase } from './supabase.js';

// import { createClient } from "../node-modules/@supabase/supabase-js"
// const supabase = createClient('https://dgjwvjcjdwdbgvnsznzn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnand2amNqZHdkYmd2bnN6bnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODA3MDAsImV4cCI6MjA1NzM1NjcwMH0.EuP7eRQZqmdHS0nD_H04SQN2lsOSHxDh-hPP7n9QSkI')
// console.log('Supabase ' + supabase);
if (document.getElementById('signin-form')){
document.getElementById('signin-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    console.log('Signing in: ' + phone);
    // Authenticate user with Supabase
    // const { data, error } = await supabase.auth.signInWithOtp({
    //     phone: {phone},
    //   })


        // console.log('Error signing in: ' + error.message);
        // alert('Error signing in: ' + error.message);

        // localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'spin.html';
    
});
}

// Code Generated by Sidekick is for learning and experimentation purposes only.
// document.getElementById('spin-button').addEventListener('click', () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//         window.location.href = 'index.html';
//         return;
//     }

//     // Check if user has already spun the wheel
//     // const { data, error } = await supabase
//     //     .from('spins')
//     //     .select('*')
//     //     .eq('user_id', user.id);

//     // if (data.length > 0) {
//     //     alert('You have already spun the wheel.');
//     //     return;
//     // }

//     // Spin the wheel and get a random reward
//     const rewards = ['Reward 1', 'Reward 2', 'Reward 3'];
//     const reward = rewards[Math.floor(Math.random() * rewards.length)];

//     // Store the result in Supabase
//     // await supabase
//     //     .from('spins')
//     //     .insert([{ user_id: user.id, reward }]);

//     document.getElementById('reward-text').innerText = reward;
//     document.getElementById('reward').style.display = 'block';
//     // Add confetti animation logic here
// });


