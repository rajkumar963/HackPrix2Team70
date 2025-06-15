import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).optional(),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

interface AuthFormProps {
  role: 'user' | 'admin';
  onBack: () => void;
  onAuthSuccess: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ role, onBack, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { login } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`Form submitted for ${role}. Is login: ${isLogin}`, values);
    login({ email: values.email, name: values.name, role });
    onAuthSuccess();
  }

  const title = isLogin ? `Login as ${role}` : `Sign up as ${role}`;
  const submitButtonText = isLogin ? 'Login' : 'Sign up';

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-center capitalize">{title}</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!isLogin && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">{submitButtonText}</Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="p-0 h-auto">
          {isLogin ? 'Sign up' : 'Login'}
        </Button>
      </div>
      <Button variant="outline" onClick={onBack} className="w-full mt-2">Back</Button>
    </div>
  );
};

export default AuthForm;
