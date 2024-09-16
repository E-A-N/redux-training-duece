import Wrapper from "@/components/wrapper";

import H1 from "@/components/typo/H1";
import BlockQuotes from "@/components/typo/BlockQuotes";

const Home = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <H1>Home</H1>
      <BlockQuotes>There's no place like 127.0.0.1</BlockQuotes>
      <BlockQuotes>...Wel maybe, 0.0.0.0</BlockQuotes>

    </Wrapper>
  );
};

export default Home;
