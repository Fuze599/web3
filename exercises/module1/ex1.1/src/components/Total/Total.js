const Total = (props) => {
    return (
      <>
      <p>Number of exercises {(() => {
              let cnt = 0;
              for (let i = 0; i < props.exercises.length; i++) {
                cnt += props.exercises[i]
              } 
              return cnt;
          })()}</p>
          
      </>
    )
  }

  export default Total