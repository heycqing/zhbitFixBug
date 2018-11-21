#coding=utf-8
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep

driver = webdriver.Chrome('./chromedriver')
driver.get('http://e.zhbit.com/jsxsd/')

# driver.find_element_by_link_text('导航').click()
# driver.find_element_by_link_text('新版教务系统').click()

# sleep(3)

user = driver.find_element_by_xpath("//input[@id='userAccount']")
pwd = driver.find_element_by_xpath("//input[@id='userPassword']")

click_ = driver.find_element_by_id('btnSubmit')

user.send_keys('你的账号')

pwd.send_keys('你的账号密码')

click_.click()

driver.find_element_by_link_text('考试报名').click()
driver.find_element_by_xpath("//input[@id='btn_query']").click()


# sleep(5)

# driver.quit()