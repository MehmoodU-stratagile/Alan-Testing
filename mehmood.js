// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});


intent('(increment|do increment)',p=>{
    p.play({command:'increment'})
})

intent('(back|go back)',p=>{
    p.play({command:'back'})
})


intent('(forward|go forward)',p=>{
    p.play({command:'forward'})
})