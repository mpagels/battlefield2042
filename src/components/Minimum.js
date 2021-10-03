import React from "react";
import styled from "styled-components";

export default function Minimum() {
  return (
    <>
      <Item>
        <b>OS:</b> 64-bit Windows 10
      </Item>
      <Item>
        <b>Processor (AMD):</b> AMD Ryzen 5 3600
      </Item>
      <Item>
        <b>Processor (Intel):</b> Core i5 6600K
      </Item>
      <Item>
        <b>Memory:</b> 8GB
      </Item>
      <Item>
        <b>Video Memory:</b> 4GB
      </Item>
      <Item>
        <b>Graphics card (NVIDIA):</b>
        <GPULink
          href="https://gpu.userbenchmark.com/Compare/Nvidia-GTX-1050-Ti-vs-Group-/3649vs10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nvidia GeForce GTX 1050 Ti
        </GPULink>
      </Item>
      <Item>
        <b>Graphics card (AMD):</b>
        <GPULink
          href="https://gpu.userbenchmark.com/Compare/AMD-RX-560-vs-Group-/3926vs10"
          target="_blank"
          rel="noopener noreferrer"
        >
          AMD Radeon RX 560
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
        <b>Hard-drive space:</b> 100GB
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
