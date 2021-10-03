import React from "react";
import styled from "styled-components";

export default function Recommended() {
  return (
    <>
      <Item>
        <b>OS:</b> 64-bit Windows 10
      </Item>
      <Item>
        <b>Processor (AMD):</b> AMD Ryzen 7 2700X
      </Item>
      <Item>
        <b>Processor (Intel):</b> Intel Core i7 4790
      </Item>
      <Item>
        <b>Memory:</b> 16GB
      </Item>
      <Item>
        <b>Video Memory:</b> 8GB
      </Item>
      <Item>
        <b>Graphics card (NVIDIA):</b>
        <GPULink
          href="https://gpu.userbenchmark.com/Compare/Nvidia-RTX-3060-vs-Group-/4105vs10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nvidia GeForce RTX 3060
        </GPULink>
      </Item>
      <Item>
        <b>Graphics card (AMD):</b>
        <GPULink
          href="https://gpu.userbenchmark.com/Compare/AMD-RX-6600-XT-vs-Group-/4117vs10"
          target="_blank"
          rel="noopener noreferrer"
        >
          AMD Radeon RX 6600 XT
        </GPULink>
      </Item>
      <Item>
        <b>DirectX:</b> 12
      </Item>
      <Item>
        <b>Online Connection Requirements:</b> 512 KBPS or faster Internet
        connection
      </Item>
      <Item>
        <b>Hard-drive space:</b> 100GB SSD
      </Item>
    </>
  );
}

const Item = styled.li`
  padding-left: 1em;
  text-indent: -0.7em;
  margin: 4px 0;

  &::before {
    content: "• ";
    color: #26ffdf; /* or whatever color you prefer */
    font-weight: bold; /* If you want it to be bold */
    display: inItemne-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`;

const GPULink = styled.a`
  background-color: #26ffdf;
  color: black;
  padding: 4px;
  text-decoration: none;
`;
