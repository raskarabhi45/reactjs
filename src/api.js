export const questions=[
    {
        id:1,
        question : 'How React works? How Virtual-DOM works in React?',
        answer : 'React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.'
    },
    {
        id:2,
        question : 'What is JSX?',
        answer : 'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. '
    },
    {
        id:3,
        question : 'What is Redux?',
        answer : 'The basic idea of Redux is that the entire application state is kept in a single store. The store is simply a javascript object.'
    },
    {
        id:4,
        question : 'What is PureComponent?',
        answer : 'PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for us. .'
    },
    {
        id:5,
        question : ' What is render() in React? And explain its purpose?',
        answer : 'Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component.'
    },
]