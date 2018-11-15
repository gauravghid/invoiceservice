For Installing Dependencies : npm install
For Running application : npm start


public class Test {

	 static double y(double x) 
	    { 
	        // Declaring the function  
	        // f(x) = 1/(1+x*x) 
	        return 1 / (1 + x * x); 
	    } 
	      
	    // Function to evalute the value of integral 
	    static double trapezoidal(double a, double b) 
	    { 
	    	double n=7;
	        // Grid spacing 
	        double h = (b - a) / n; 
	      
	        // Computing sum of first and last terms 
	        // in above formula 
	        double s = y(a) + y(b); 
	      
	        // Adding middle terms in above formula 
	        for (int i = 1; i < n; i++) 
	            s += 2 * y( a + i * h); 
	      
	        // h/2 indicates (b-a)/2n. Multiplying h/2 
	        // with s. 
	        return (h / 2) * s; 
	    } 
	    
	    
	  static double auc(double X[], double Y[]) {
		 double auc = 0;
		for (int i= 0; i<X.length;i++) {
			auc = auc + trapezoidal(X[i],Y[i]);
			
		}
		return auc;
		  
	  }
	  
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		

	}

}

