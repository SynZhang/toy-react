import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello </span>
        <span>ToyReact</span>
        <span>!</span>
        {this.children}
      </div>
    )
  }
}

const App = (
  <MyComponent>
    <div>Hello Child.</div>
  </MyComponent>
)

ToyReact.render(App, document.body)
