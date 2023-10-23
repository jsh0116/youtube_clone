import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from "../../components/layout/Header";
import SearchBar from "../../components/molecules/Search/SearchBar";
import {BrowserRouter} from "react-router-dom";

// Header 컴포넌트 테스트
test('Header 컴포넌트가 렌더링되었을 때 "Youtube" 텍스트가 존재해야 합니다', () => {
  const renderResult = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(renderResult.container).toBeInTheDocument();
  const youtubeText = screen.getByText('Youtube');
  expect(youtubeText).toBeInTheDocument();
});

// SearchBar 컴포넌트 테스트
test('SearchBar 컴포넌트에서 입력 필드가 제대로 작동하는지 테스트합니다', () => {
  const renderResult = render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  // 입력 필드 찾기
  const inputField: any = renderResult.getByPlaceholderText('Search...');

  // 입력 필드에 값을 입력하고 확인
  fireEvent.change(inputField, { target: { value: '테스트 검색어' } });
  expect(inputField.value).toBe('테스트 검색어');

  // 검색 버튼 클릭
  // const searchButton = renderResult.getByText('Search'); // 검색 버튼 텍스트에 따라 수정
  // fireEvent.click(searchButton);

  // 이 부분에서 검색 결과에 대한 동작을 테스트할 수 있습니다.
});
