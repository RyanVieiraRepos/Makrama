-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/11/2025 às 23:53
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `makrama`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `numero` int(11) NOT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `nascimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `sobrenome`, `email`, `senha`, `cep`, `numero`, `celular`, `nascimento`) VALUES
(1, 'Lucas', 'Ferreira', 'lucasf@gmail.com', '12345', '04567-210', 102, '11987654321', '1997-04-12'),
(2, 'Mariana', 'Souza', 'mariana.s@gmail.com', 'abc123', '03045-600', 350, '11976543210', '1994-10-28'),
(3, 'Rafael', 'Oliveira', 'rafael.oli@gmail.com', 'senha321', '02730-190', 22, '11999887766', '2000-06-05'),
(4, 'Beatriz', 'Lima', 'bea.lima@gmail.com', 'minhasenha', '04012-340', 78, '11988776655', '1999-02-19'),
(5, 'João', 'Santos', 'joaos@gmail.com', 'pass2024', '05543-120', 459, '11977665544', '1995-09-10');

-- --------------------------------------------------------

--
-- Estrutura para tabela `listados`
--

CREATE TABLE `listados` (
  `id` int(11) NOT NULL,
  `fk_pedidos` int(11) NOT NULL,
  `fk_produtos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `fk_cliente` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `pagamento` varchar(255) NOT NULL,
  `total` decimal(19,2) DEFAULT NULL,
  `entregue` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `fk_cliente`, `data`, `pagamento`, `total`, `entregue`) VALUES
(1, 1, '2025-10-01 00:00:00', 'Cartão', 140.00, 1),
(2, 2, '2025-10-03 00:00:00', 'Pix', 25.00, 0),
(3, 3, '2025-10-05 00:00:00', 'Boleto', 180.00, 1),
(4, 4, '2025-10-06 00:00:00', 'Cartão', 45.00, 1),
(5, 5, '2025-10-08 00:00:00', 'Pix', 135.00, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cor` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `preco` decimal(19,2) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `cor`, `descricao`, `imagem`, `preco`, `tipo`) VALUES
(1, 'Pulseira de Macramê', 'Vermelha', 'Pulseira artesanal feita com fio encerado', 'pulseira1.jpg', 25.00, 'acessório'),
(2, 'Colar Boho', 'Marrom', 'Colar artesanal com contas de madeira', 'colar1.jpg', 45.00, 'acessório'),
(3, 'Painel Decorativo', 'Bege', 'Painel de parede feito em macramê', 'painel1.jpg', 120.00, 'decoração'),
(4, 'Chaveiro Nó Simples', 'Azul', 'Chaveiro artesanal em nó duplo', 'chaveiro1.jpg', 15.00, 'utilitário'),
(5, 'Bolsa Macramê', 'Branca', 'Bolsa feita à mão em corda de algodão', 'bolsa1.jpg', 180.00, 'acessório');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `listados`
--
ALTER TABLE `listados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pedidos` (`fk_pedidos`),
  ADD KEY `fk_produtos` (`fk_produtos`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cliente` (`fk_cliente`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `listados`
--
ALTER TABLE `listados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `listados`
--
ALTER TABLE `listados`
  ADD CONSTRAINT `listados_ibfk_1` FOREIGN KEY (`fk_pedidos`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `listados_ibfk_2` FOREIGN KEY (`fk_produtos`) REFERENCES `produtos` (`id`);

--
-- Restrições para tabelas `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`fk_cliente`) REFERENCES `clientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
