import { ProviderWrapper as VoteWrapper } from "contexts/countersContext";
import App from "components/App/App.js";

const AppLoader= () => {
  return (
    <VoteWrapper >
        <App/>
      </VoteWrapper >
  )
}

export default AppLoader