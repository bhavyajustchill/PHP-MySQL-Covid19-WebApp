-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2022 at 08:54 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `covid`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
`user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_id`, `name`, `email`, `password`, `mobile`, `created_date`) VALUES
(2, 'Bhavya', 'bhavya@gmail.com', 'test123', '6354546061', '2021-12-12');

-- --------------------------------------------------------

--
-- Table structure for table `appoinment`
--

CREATE TABLE IF NOT EXISTS `appoinment` (
`cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_6` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_8` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_9` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `appoinment`
--

INSERT INTO `appoinment` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `created_date`) VALUES
(44, 'smeet@gmail.com', '12:00', 'Smeet', '123412341234', 'Sterling - Rajkot', 'Covid-19 Test', '1234567890', '2021-03-16', 'Covid-19 +ve', 'Follow Covid Guidelines', '2021-03-16'),
(45, 'manas@gmail.com', '12:00', 'Manas', '123412341234', 'Genesis - Rajkot', 'Covid-19 Test', '1234567890', '2021-03-15', 'Covid-19 +ve', 'Follow Covid Guidelines', '2021-03-16'),
(46, 'user@gmail.com', '12:00', 'Bhruguraj', '123412341234', 'Wockhardt - Rajkot', 'Covid-19 Test', '1234567980', '2021-03-17', 'test', 'test', '2021-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `guide`
--

CREATE TABLE IF NOT EXISTS `guide` (
`cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_6` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_8` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_9` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `guide`
--

INSERT INTO `guide` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `created_date`) VALUES
(35, 'genesis@gmail.com', 'Cold', 'All Ages', 'Both', 'Have kabas', 'Kabasura kudineer ingredients consist of numerous powerful herbs like ginger, pepper, clove, etc', 'Take 3 times a day', 'Nil', 'Nil', 'Pending', '2021-03-16'),
(36, 'sterling@gmail.com', 'Fever', 'All', 'Both', 'Take natur', 'Follow siddha medicine', 'Nil', 'Nil', 'Nil', 'Pending', '2021-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE IF NOT EXISTS `hospital` (
`cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`cus_id`, `email`, `field_1`, `created_date`) VALUES
(65, '', 'Genesis - Rajkot', '2021-01-20'),
(66, '', 'Wockhardt - Rajkot', '2021-01-20'),
(67, '', 'Sterling - Rajkot', '2021-01-21'),
(68, '', 'Synergy - Rajkot', '2021-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `hosp_login`
--

CREATE TABLE IF NOT EXISTS `hosp_login` (
`cus_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `hosp_login`
--

INSERT INTO `hosp_login` (`cus_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `created_date`) VALUES
(7, 'Genesis - Rajkot', 'genesis@gmail.com', 'test', '1234568790', '360005', 'test', 'test', 'test', 'Approved', '2021-02-08'),
(8, 'Sterling - Rajkot', 'sterling@gmail.com', 'test', '1234567890', '400037', 'test', 'test', 'test', 'Approved', '2021-02-08'),
(9, 'Wockhardt - Rajkot', 'wockhardt@gmail.com', 'test', '1234567890', '122001', 'test', 'test', 'test', 'Approved', '2021-03-17'),
(10, 'Synergy - Rajkot', 'synergy@gmail.com', 'test', '1234567890', '123456', 'test', 'Nil', 'Nil', 'Pending', '2021-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
`user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(100) COLLATE utf8_bin NOT NULL,
  `otp` varchar(100) COLLATE utf8_bin NOT NULL,
  `success` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `otp`, `success`, `created_date`) VALUES
(3, 'Smeet', 'smeet14@gmail.com', 'test', '9999955555', 'CSE', 'Rajkot', 'white', 'rose', '', '', '2017-03-08'),
(4, 'Manas', 'manas@gmail.com', 'test', '1234567890', 'Male', 'Rajkot', 'test', 'test', '', '', '2018-02-13'),
(5, 'Maharshi', 'maharshi@gmail.com', 'test', '1234567897', 'Male', 'Jamnagar', 'test', 'tes', '', '', '2021-01-20'),
(7, 'Darshan Bhatt', 'darshanb@gmail.com', 'test', '1234567890', 'Male', 'Amreli', 'test', 'test', '', '', '2021-02-08'),
(8, 'Bhruguraj', 'bhruguraj@gmail.com', 'test', '1234567892', 'Male', 'test', 'test', 'test', '', '', '2021-03-13'),
(10, 'test', 'test123@gmail.com', 'test', '1234678920', 'Male', 'test', 'test', 'test', '89587', '', '2021-03-13');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE IF NOT EXISTS `stock` (
`cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`cus_id`, `email`, `field_1`, `field_2`, `created_date`) VALUES
(1, '', 'Available', 'Poliomyelitis', '2021-01-21'),
(2, '', 'Available', 'Rabies', '2021-01-21'),
(3, '', 'Unavailable', 'Mumps', '2021-01-21'),
(4, '', 'Available', 'pfiher', '2021-01-21'),
(5, '', 'Available', 'Covid Vaccine', '2021-03-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `appoinment`
--
ALTER TABLE `appoinment`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `guide`
--
ALTER TABLE `guide`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `hosp_login`
--
ALTER TABLE `hosp_login`
 ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
 ADD PRIMARY KEY (`cus_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `appoinment`
--
ALTER TABLE `appoinment`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `guide`
--
ALTER TABLE `guide`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT for table `hosp_login`
--
ALTER TABLE `hosp_login`
MODIFY `cus_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
