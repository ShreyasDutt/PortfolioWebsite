import About from "./Components/About.jsx";
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
      <>
          <AnimatedCursor
              innerSize={8}
              outerSize={20}
              color='255,255,255'
              outerStyle={{
                  mixBlendMode: "color-dodge",

              }}
              outerAlpha={0.5}
              innerScale={1.1}
              outerScale={2}
              clickables={[
                  'a',
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  'label[for]',
                  'select',
                  'textarea',
                  'button',
                  '.link'
              ]}
          />

    <div className={"select-none font-Poppins scroll-smooth"}>
        <div className=" w-full bg-[#0c0c0c] bg-dot-8-s-1-[#363636] z-0 relative flex justify-center px-4">
            <About/>
        </div>
    </div>
      </>
  )
}

export default App
