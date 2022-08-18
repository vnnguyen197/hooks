import React, { useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from "./ThemeContext";


const Flex = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Header = styled.h1`
    border-bottom: 1px solid #aaa;
`;
const Content = styled.h2`
  font-size: 1.2em;
  padding: 10px 185px;
  border: 5px solid gray;
  margin: 30px;
`;

function Paragraph() {

  const context = useContext(ThemeContext)
  
  console.log('theme:', context.theme);
  return(
    <Flex>
      <Header > Demo UseReducer </Header>
      <Title>| Hà Nội, 16.08.2022 |</Title>
      <Content className={context.theme}>
        Người đàn ông yêu bạn chân thành, là người sẵn sàng chịu thiệt thòi để
        làm người mình thương được vui vẻ, hạnh phúc. Là người mà dù đi qua bao
        giông bão, mệt nhọc của cuộc đời, vẫn nắm chặt lấy tay bạn, chở che và
        bao dung bạn, không rời nửa bước. Là người lo lắng mỗi khi bạn không kịp
        rep tin nhắn, nghe điện thoại. Là người dõi theo từng nhịp đập của bạn,
        luôn muốn cùng bạn bước đi hết cả đoạn đường. Thật ra, gặp được một
        người vì mình như thế, đúng là rất may mắn. Chẳng sợ đời khó nhọc, chẳng
        sợ chờ đợi lâu, chỉ cần tìm đúng người, là đủ viên mãn rồi. Một đời, tìm
        được một người, vì mình mà cố gắng, vì mình mà chân thành, thì dù muộn
        một chút, dù lâu một chút, vẫn rất xứng đáng.
      </Content>
    </Flex>
  )
}

export default Paragraph