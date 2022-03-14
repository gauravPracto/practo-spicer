import re,datetime
class CardValidator:
    
    def __init__(self,cardNumber , holderName , CVV , date ):
        
        self.cardNumber = cardNumber
        self.holderName = holderName
        self.CVV = CVV
        self.date = date
    
    
    
    '''
        ------------------------------------------------------------------------------------
        
        Method Name : isValidStart
        This function check if number start is valid or not based on rules
        
        start should be 3 , 4 , 5 , 6 , 37
        
        Args:
            cardDigit : card digit of the card number ==> list
        
        return :
            Bool (True/False)
        
        ------------------------------------------------------------------------------------
    '''
    
    def isValidStart(self,cardDigit):
        if cardDigit[0]==4 or cardDigit[0]==5 or cardDigit[0]==6 or cardDigit[0]==3 or cardDigit[:2]==37:
            return True
        else:
            return False
        
        
        

        '''
        ------------------------------------------------------------------------------------
        
        Method Name : getCardDigits
        function retrive the card number digit from card number
        
        Args:
            cardNumber = this will take card number as a argument ==>string
        
        return :
            List ([])
        ------------------------------------------------------------------------------------
        '''

    def getCardDigits(self,cardNumber):
        cardDigits = []
        # card digit list contain card number
        try:
            for x in str(cardNumber):
                if x.isdigit():
                    cardDigits.append(int(x))
            return cardDigits
        except:
            return []
    
    
    
        '''
        ------------------------------------------------------------------------------------
        
        Method Name : digitSum
        fuction sum up the number broken to its digit ( sum of digits )
        
        Args:
            number = this will take number as a argument ==>int
        
        return :
            int (0)
        ------------------------------------------------------------------------------------
        '''
    

    def digitSum(self,number):
        if type(number)!=int:
            return -1
        accumulator = 0
        while number!=0:
            accumulator+=number%10
            number//=10
        return accumulator
    
    
    
    

    
        '''
        ------------------------------------------------------------------------------------
        
        Method Name : luhnAlgorithm
        This function check if number is valid credit card number or not using luhn Algo
        
        cardDigit : card digit of the card number ==> list
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
        '''
        
        
    def luhnAlgorithm(self,cardDigits):

        evenPlacesSum = 0
        oddPlacesSum = 0
        oddEvenPlace = 0
        
        """
            1a. get every second number from last and double it , if greater then 9 add it digit wise
            1b. non every second is just added
            2. sum them both
            3. modolas by 10 if 0 return True else False
        """

        for x in cardDigits[::-1]:
            if not oddEvenPlace%2:
                oddPlacesSum+=x
            else:
                tempDigitSum = self.digitSum(2*x)
                if tempDigitSum==-1:
                    return False
                evenPlacesSum+=tempDigitSum
            oddEvenPlace+=1

        return  not (evenPlacesSum+oddPlacesSum)%10

    
    
    
        '''
        ------------------------------------------------------------------------------------
        
        Method Name : isValidNumber
        This function uses other function getCardDigits , isValidStart , luhnAlgorithm to check 
        if valid or not
        
        cardNumber = this will take card number as a argument ==>string
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
        '''
    
    
    def isValidNumber(self,cardNumber):
        cardDigits = self.getCardDigits(cardNumber)
        if len(cardDigits)>16:
            return False
        else:
            validStart = self.isValidStart(cardDigits)
            if validStart:
                return self.luhnAlgorithm(cardDigits)
            else:
                return False
            
    
    
    
    
        '''
        ------------------------------------------------------------------------------------
        
        Method Name : isValidName
        This function check if the card holder name is valid or not 
        
        holderName = this will take card holder name as a argument ==>string
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
        '''
    
    

    def isValidName(self,holderName):
        compileReg = re.compile(r'^([a-z]+)( [a-z]+)*( [a-z]+)*$', re.IGNORECASE)
        matched = re.fullmatch(compileReg,holderName)
        isMatched = False
        if matched!=None:
            isMatched = re.fullmatch(compileReg,holderName).string==holderName
        else:
            return False
        if isMatched:
            return True
        else:
            return False
        
        
        
        
        
        
    '''
        ------------------------------------------------------------------------------------
        
        Method Name : isValidCVV
        This function check if the CVV is valid or not 
        
        CVV = this will take card holder CVVe as a argument ==>string/int
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
    '''
        

    def isValidCVV(self,CVV):
        return True if len(str(CVV))==3 or len(str(CVV))==4 and type(CVV)==int else False 

    
    
    
    
    
    '''
        ------------------------------------------------------------------------------------
        
        Method Name : isValidDate
        This function check if the Date is valid or not 
        
        CVV = this will take card holder expiry date as a argument ==>string(dd/mm/yy)
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
    '''
    
    def isValidDate(self,date):
        if type(date)!=str:
            return False
        delimiter = date.count('/')

        if delimiter!=2:
            return False

        currentDate = datetime.datetime.now()
        expectedDate = date
        try:
            expectedDate = datetime.datetime.strptime(expectedDate, "%d/%m/%Y")

        except:
            return False

        if expectedDate>currentDate:
            return True
        else:
            return False
        
        
    
    
    
    
    '''
        ------------------------------------------------------------------------------------
        
        Method Name : validateCard
        This function check if the cardNumber ,  cardDate , cardCVV , CardName is valid
        
        no argument
        
        return :
            Bool (True/False)
        ------------------------------------------------------------------------------------
    '''

    def validateCard(self):
        
        validNumber = self.isValidNumber(self.cardNumber)
        validDate = self.isValidDate(self.date)
        validCVV = False
        try:
            validCVV = self.isValidCVV(int(self.CVV))
        except:
            return False
        validName = self.isValidName(self.holderName)
        
        if validName and validDate and validCVV and validNumber:
            return True
        else:
            return False


