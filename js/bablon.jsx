class App extends React.Component{
    constructor(props){
        super(props);
        const defaultText = `# Welcome to my React Markdown Previewer!

        ## You can clear all text and write html if you want
        ### And here's some other cool stuff:
          
        Heres some code, \`<div></div>\`, between 2 backticks.
      
        \`\`\`
        // this is multi-line code:
      
        function anotherExample(firstLine, lastLine) {
          if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
          }
        }
        \`\`\` 
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossing stuff out~~.
      
        There's also [links](https://www.freecodecamp.com), and
         > Block Quotes!
      
        And if you want to get really crazy, even tables:
      
        Wild Header | Crazy Header | Another Header?
        ------------ | ------------- | ------------- 
        Your content can | be here, and it | can be here....
        And here. | Okay. | I think we get it.
      
        - And of course there are lists.
          - Some are bulleted.
              - With different indentation levels.
                - That look like this.
      
        1. And there are numbererd lists too.
        - Even if you use dashes or asterisks.
        * And last but not least, let's not forget embedded images:
        ![React Logo w/ Text](https://goo.gl/Umyytc)
        `;
        this.state = {
            input: defaultText
        };
        this.handleChange = this.handleChange.bind(this);
    }
    convert(){
        let md = marked(this.state.input);
        return {__html : md};
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    render(){
        return(
                <div className='box'>
                    <div className='col-lg-6 col-md-6'>
                        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                    <div id='preview' dangerouslySetInnerHTML={this.convert()}></div>
                    </div>
                </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#app"))