"use client";
import { ContactInputs } from "@/components/constants/FormTypes";
import { ContactFormRules } from "@/components/constants/ValidationTypes";
import postContact from "@/components/constants/api/post-contact";
import ContactModal from "@/components/modals/ContactModal";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import Spinner from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { PuffLoader } from "react-spinners";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(ContactFormRules),
  });

  const onSubmit: SubmitHandler<ContactInputs> = async (params) => {
    setLoading(true);
    const res = await postContact({ ...params });
    if (res.status === 200) {
      setOpen(true);
    } else {
      alert("Message could not be sent.");
    }
    setLoading(false);
  };
  return (
    <div>
      {/* Contact Form */}
      <div className="flex items-center lg:px-14 xl:px-20">
        <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="firstname" className="font-medium">
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <Input
                    name={name}
                    defaultValue={value}
                    onChange={onChange}
                    className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-primary-500"
                  />
                )}
              />
              {errors?.firstName && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors?.firstName?.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="lastname" className="font-medium">
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <Input
                    name={name}
                    defaultValue={value}
                    onChange={onChange}
                    className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-primary-500"
                  />
                )}
              />
              {errors?.lastName && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors?.lastName?.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Input
                  name={name}
                  defaultValue={value}
                  onChange={onChange}
                  className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-primary-500"
                />
              )}
            />
            {errors?.email && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Textarea
                  placeholder="Type your message here."
                  name={name}
                  defaultValue={value}
                  onChange={onChange}
                  className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-primary-500"
                />
              )}
            />
            {errors?.message && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors?.message?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-700 bg-primary-700 px-5 py-3 font-semibold leading-6 text-white hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring focus:ring-primary-400 focus:ring-opacity-50 active:border-primary-700 active:bg-primary-700 dark:focus:ring-primary-400 dark:focus:ring-opacity-90 lg:w-auto"
          >
            {loading && (
              <PuffLoader color="#36d7b7" loading={loading} size={20} />
            )}
            {!loading && <SiMinutemailer />}
            <span>{loading ? "Sending Message" : "Send Message"}</span>
          </button>
        </form>
      </div>
      <ContactModal isOpen={open} onOpenChange={handleToggle} />
      {/* END Contact Form */}
    </div>
  );
};

export default ContactForm;
