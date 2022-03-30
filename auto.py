import pprint
from re import I
from selenium import webdriver
import time
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("file:///D:/Desktop/new.html")
driver.maximize_window()
time.sleep(4)

question = driver.find_element(By.ID,"question")
op1 = driver.find_element(By.ID,"op1")
op2 = driver.find_element(By.ID,"op2")
op3 = driver.find_element(By.ID,"op3")
op4 = driver.find_element(By.ID,"op4")
ans = driver.find_element(By.ID,"answer")
tags = driver.find_element(By.ID,"tags")
#exp = driver.find_element(By.ID,"explanation")
submitbtn = driver.find_element(By.ID,"submitbtn")
dif = driver.find_element(By.ID,"difficulty")
list_of_tags = ["dragons","chocolate","cat","anime","dog","djangular","sad","centerfresh","nothing","linux","god","piano","music","discord","pyschology","books","nerdsrindhi","boomerman","animekanni","nallapayan","leaderamma","quietkid"]

NUMBER_OF_QUESTIONS = 1000
for i in range (NUMBER_OF_QUESTIONS):
    question.send_keys("This is dummy question number " + str((i+1)))
    op1.send_keys("This is dummy option 1")
    op2.send_keys("This is dummy option 2")
    op3.send_keys("This is dummy option 3")
    op4.send_keys("This is dummy option 4")
    ans.send_keys("this is dummy answer for question " + str((i+1)))
    tags.send_keys(list_of_tags[i%(len(list_of_tags))])
    #exp.send_keys("this is explanation for question" +str((i+1)))
    dif.send_keys(str(i%10))
    submitbtn.click()
    driver.get(driver.getCurrentUrl());
